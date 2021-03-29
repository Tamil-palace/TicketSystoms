import sqlite3
try:
    with sqlite3.connect("ticket.db") as con:
        cursor = con.cursor()
        cursor.execute("select * from users")
        rows = cursor.fetchall()
        print(rows)
except Exception as e:
    print(e)
print("Opene database successfully")
