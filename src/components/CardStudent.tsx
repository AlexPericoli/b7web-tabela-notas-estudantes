import { Student } from "@/types/Student"

const CardStudent = (student: Student) => {
    return (
        <div className="p-2 flex border-1 bg-gray-300 text-black">
            <div className="w-15 pr-2 rounded">
                <img src={student.avatar} alt={student.name} />
            </div>
            <div className="w-96">
                <div className="w-60 font-bold">{student.name}</div>
                <div>{student.email}</div>
            </div>
            <div className="w-50">{student.active ? 'Active' : 'Inactive'}</div>
            <div className="w-50">{student.grade1}</div>
            <div className="w-50">{student.grade2}</div>
            <div className="w-50">{((student.grade1 + student.grade2) / 2).toFixed(2)}</div>
        </div>
    )
}

export default CardStudent