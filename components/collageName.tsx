'use client';
import { collageData } from "@/lib/collagesdata";
import Link from "next/link";
import { Dispatch, useEffect, useState } from "react";

// Debounce  function
function debounce<Func extends (...args: any[]) => void>(func: Func, delay: number) {
    let timeoutId: ReturnType<typeof setTimeout>;
    return (...args: Parameters<Func>) => {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            func(...args);
        }, delay);
    };
}

const CollageName = ({setShowCollege ,showCollege}:{setShowCollege: Dispatch<React.SetStateAction<boolean>> ,showCollege:boolean|null}) => {    
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredColleges, setFilteredColleges] = useState([]);

    const handleSearch = debounce((term: string) => {
        if (!term.trim()) {
            setFilteredColleges([]);
            return;
        }

        const results = collageData.filter((college: any) => {
            const valuesToSearch = [
                college.name,
                college.state,
                college.district,
                college["ALL UNIVERSITIES"]
            ];

            return valuesToSearch.some((value) =>
                value?.toLowerCase().includes(term.toLowerCase())
            );
        });

        setFilteredColleges(results);
    }, 300);

    // Handle changes with debounce
    useEffect(() => {
        handleSearch(searchTerm);
    }, [searchTerm]);

    const onclickHandler = (name: string) => {
        localStorage.setItem('collageName', name);
        setShowCollege(!showCollege)
    }

    return (
        <div className="flex flex-col items-center  p-4">
            <div className="flex justify-between w-full max-w-md p-2 mb-6">
                <input
                    type="text"
                    placeholder="Search colleges by name, state, district..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="flex-grow p-2 border border-gray-300 rounded-2xl"
                />
            </div>

            <div className="w-full max-w-md">
                {filteredColleges.length > 0 ? (
                    filteredColleges.map((college: any, index: number) => (
                        <div key={index} onClick={()=>onclickHandler(college.name)} className="p-2 mb-2 border rounded shadow-sm boxanimation bg-[#1f1f1f]">
                            <p className="font-semibold">{college.name}</p>
                            <p className="text-sm text-gray-600">State: {college.state}</p>
                            <p className="text-sm text-gray-600">District: {college.district}</p>
                            <Link href={`https://${college.name_3}`} target="_self" className="text-sm text-blue-600">{college.name_3}</Link>
                        </div>
                    ))
                ) : searchTerm && (
                    <p className="text-gray-500">No colleges found.</p>
                )  }
            </div>
        </div>
    );
}


export default CollageName
