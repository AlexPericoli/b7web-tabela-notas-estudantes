import { Student } from '@/types/Student'

type Props = {
    students: Student[]
}

const StudentsTable = ({ students }: Props) => {
    return (
        <table className="w-full border border-gray-600 rounded-md overflow-hidden">
            <thead>
                <tr className="text-left border-b border-gray-600 bg-gray-800">
                    <th className="p-3">Name</th>
                    <th className="p-3">Status</th>
                    <th className="p-3">Grade 1</th>
                    <th className="p-3">Grade 2</th>
                    <th className="p-3">Final Grade</th>
                </tr>
            </thead>
            <tbody>
                {students.map((student) => (
                    <tr key={student.id} className="bg-gray-400 text-gray-800 border-b border-gray-600">
                        <td className="p-3 flex items-center">
                            <img src={student.avatar} alt={student.name} className="w-15 h-15 rounded-full mr-3" />
                            <div className="font-bold">
                                <div>{student.name}</div>
                                <div>{student.email}</div>
                            </div>
                        </td>
                        <td className="p-3">
                            {student.active && (
                                <div className="w-16 py-1 text-center rounded-md border border-green-800 bg-green-600 text-white text-xs">
                                    Active
                                </div>
                            )}
                            {!student.active && (
                                <div className="w-16 py-1 text-center rounded-md border border-red-800 bg-red-600 text-white text-xs">
                                    Inactive
                                </div>
                            )}
                        </td>
                        <td className="p-3">{student.grade1.toFixed(1)}</td>
                        <td className="p-3">{student.grade2.toFixed(1)}</td>
                        <td className="p-3 font-bold">
                            {student.active ? ((student.grade1 + student.grade2) / 2).toFixed(2) : "--"}
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default StudentsTable