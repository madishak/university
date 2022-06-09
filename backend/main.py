import sqlite3
import os
from flask import Flask, request
from flask_cors import CORS

app = Flask(__name__)
basedir = os.path.abspath(os.path.dirname(__file__))

CORS(app)


@app.route('/', methods=['GET', 'POST'])
def login():
    conn = sqlite3.connect(os.path.join(basedir, 'university.db'))
    query = conn.cursor()

    query.execute("""SELECT * FROM students""")
    students_res = query.fetchall()
    students = []
    for student in students_res:
        id, login, password, name, faculty, course, group = student
        item = dict(id=id, login=login, password=password, name=name, faculty=faculty, course=course, group=group)
        students.append(item)
    conn.commit()

    query.execute("""SELECT * FROM staff""")
    staff_res = query.fetchall()
    staff = []
    for stf in staff_res:
        id, login, password, name, position, salary = stf
        item = dict(id=id, login=login, password=password, name=name, position=position, salary=salary)
        staff.append(item)
    conn.commit()

    print(students)
    print(staff)

    conn.commit()
    return {'students': students, 'staff': staff}


@app.route('/groups', methods=['POST'])
def groups():
    if request.method == 'POST':
        conn = sqlite3.connect(os.path.join(basedir, 'university.db'))
        query = conn.cursor()

        query.execute("""SELECT tasks.task_id, staff.id AS teacher_id, staff.name AS teacher, groups.name AS group_name, 
        disciplines.name as discipline, task_link
        FROM (students INNER JOIN groups ON students.id = groups.student_id) 
            INNER JOIN (staff INNER JOIN ((disciplines INNER JOIN studies ON disciplines.id = studies.id) 
            INNER JOIN tasks ON disciplines.id = tasks.discipline_id) ON (staff.id = tasks.teacher_id) 
            AND (staff.id = studies.teacher_id)) ON students.id = studies.student_id
        WHERE staff.id = """ + str(request.get_json()['teacherId']) +
                      " GROUP BY staff.id, staff.name, groups.name, disciplines.name, task_link;")
        result = query.fetchall()

        groups_list = []
        for group in result:
            task_id, teacher_id, teacher, group_name, discipline, task_link = group
            item = dict(task_id=task_id, teacher_id=teacher_id, teacher=teacher, group_name=group_name,
                        discipline=discipline, task_link=task_link)
            groups_list.append(item)
        print(groups_list)
        conn.commit()
        return {'groups': groups_list}
    return {}


@app.route('/disciplines', methods=['POST'])
def disciplines():
    if request.method == 'POST':
        conn = sqlite3.connect(os.path.join(basedir, 'university.db'))
        query = conn.cursor()

        query.execute("""SELECT tasks.task_id, students.id AS students_id, students.name as student, disciplines.name as discipline, 
               disciplines.name as discipline, studies.score, task_link
               FROM (students INNER JOIN groups ON students.id = groups.student_id) 
                   INNER JOIN (staff INNER JOIN ((disciplines INNER JOIN studies ON disciplines.id = studies.id) 
                   INNER JOIN tasks ON disciplines.id = tasks.discipline_id) ON (staff.id = tasks.teacher_id) 
                   AND (staff.id = studies.teacher_id)) ON students.id = studies.student_id
               WHERE students.id = """ + str(request.get_json()['studId']) +
                      " GROUP BY students.id, students.name, groups.name, disciplines.name, studies.score, task_link;")

        result = query.fetchall()

        studies = []
        for study in result:
            id, students_id, student, teacher, discipline, score, task_link = study
            item = dict(id=id, students_id=students_id, student=student, teacher=teacher, discipline=discipline,
                        score=score, task_link=task_link)
            studies.append(item)
        print(studies)
        conn.commit()
        return {'studies': studies}
    return {}


if __name__ == '__main__':
    app.run(debug=True)
