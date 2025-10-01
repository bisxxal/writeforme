'use client';
import { createWritterProfile } from "@/actions/user.action";
import { collageData } from "@/lib/collagesdata";
import { toastError, toastSuccess } from "@/lib/toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Loader, X } from "lucide-react";
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

const CollageName = ({ setShowCollege, showCollege }: { setShowCollege: Dispatch<React.SetStateAction<boolean>>, showCollege: boolean | null }) => {
    const [searchTerm, setSearchTerm] = useState({ name: '', district: '' });
    const [filteredColleges, setFilteredColleges] = useState([]);
    const queryClient = useQueryClient();

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
        handleSearch(searchTerm.name);
    }, [searchTerm]);

    const onclickHandler = (name: string, district: string) => {
        setSearchTerm({ name, district });
    }

    const onSumbitHandler = (e: React.FormEvent) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('collegeName', searchTerm.name);
        formData.append('district', searchTerm.district);

        localStorage.setItem('collageName', searchTerm.name);
        localStorage.setItem('district', searchTerm.district);

        updateMUtation.mutate(formData);
    }

    const updateMUtation = useMutation({
        mutationFn: async (formData: FormData) => {
            return await createWritterProfile('col', formData);
        },
        onSuccess: (data) => {
            if (data?.status === 200) {
                toastSuccess(data?.message);
                queryClient.invalidateQueries({ queryKey: ['fetchUserProfile'] });
                setShowCollege(!showCollege)

            } else {
                toastError(data?.message);
            }
        },

    })

    return (
        <div className="flex flex-col items-center  p-4">

            <div className="flex justify-between !gap-2 bg-[#ffffff27] rounded-xl border-gray-300  items-center max-w-full  p-2 mb-6">
                <input
                    type="text"
                    placeholder="Search colleges by name, state, district..."
                    value={searchTerm.name}
                    onChange={(e) => setSearchTerm({ name: e.target.value, district: searchTerm.district })}
                    className="w-[400px] max-md:w-[300px] p-2   "
                />
                <p onClick={() => setShowCollege(false)} className=' text-xl'><X /></p>
            </div>

            <div className=" w-full overflow-y-auto max-h-[650px] rounded-xl  ">
                {filteredColleges.length > 0 ? (
                    filteredColleges.map((college: any, index: number) => (
                        <div key={index} onClick={() => onclickHandler(college.name, college.district)} className="p-2 mb-2 bordercolor rounded-xl shadow-sm boxanimation card ">
                            <p className="font-semibold">{college.name}</p>
                            <p className="text-sm text-gray-400">District: {college.district}</p>
                        </div>
                    ))
                ) : searchTerm.name && (
                    <p className="text-gray-500">No colleges found.</p>
                )
                }
                <button onClick={(e) => onSumbitHandler(e)} disabled={!searchTerm.name || !searchTerm.district} hidden={!searchTerm.name || !searchTerm.district} className="center disabled:opac ity-0 buttonbg w-full rounded-3xl py-2">{updateMUtation.isPending ? <Loader className="  animate-spin" /> : 'Sumbit'}</button>
            </div>
        </div>
    );
}


export default CollageName
