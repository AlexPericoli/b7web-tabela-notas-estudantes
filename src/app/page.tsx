import StudentsTable from "@/components/StundentsTable"
import { students } from "@/data/students"

const Page = () => {
  return (
    <div className="container-mx-auto px-30 bg-black w-screen h-screen text-white">
      <h1 className="mb-5 text-3xl text-center">Tabela de notas dos estudantes</h1>
      <StudentsTable students={students} />
    </div>
  )
}

export default Page