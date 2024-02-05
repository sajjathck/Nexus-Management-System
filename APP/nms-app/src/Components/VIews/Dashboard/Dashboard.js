import React from 'react'
import StudentPage from './StudentPage'
import TeacherPage from './TeacherPage'

export default function Dashboard() {
  return (
    <section className="bg-light rounded-2 min-vh-80 d-flex flex-column justify-content-center align-items-center">
             {/* to be based of role */}
              {/* <StudentPage /> */}
              <TeacherPage />
      </section>
  )
}
