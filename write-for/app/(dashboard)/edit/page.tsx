'use client'
import { createWritterProfile } from '@/actions/user.action'
import { toastError, toastSuccess } from '@/lib/toast'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import React from 'react'
import PhotoUploadCom from '../_components/photoUploadCom'
import { useProfileInfoHook } from '@/hooks/useProfileinfo'

const EditPage = () => {
    const client = useQueryClient();
    const { data, isLoading } = useProfileInfoHook();
    const handleSubmit = (formData: FormData) => {
        try {
            const description = formData.get('description') as string;
            const pagePrice = formData.get('page') as string;
            const digramsPrice = formData.get('digram') as string;

            if (!description || !pagePrice || !digramsPrice) {
                toastError('Please fill all the fields');
                return;
            }
            createSellerProfile.mutate(formData);
        } catch (error) {

        }
    }

    const createSellerProfile = useMutation({
        mutationFn: async (formData: FormData) => {
            return await createWritterProfile('writer', formData);
        },
        onSuccess: (data) => {
            if (data.status === 200) {
                toastSuccess(data.message);
                client.invalidateQueries({ queryKey: ['fetchUserProfile'] });
            } else {
                toastError(data.message);
            }
        },
        onError: (error) => {
        }
    })

    return (
        <div className=' w-full px-10 max-md:px-4 pb-20'>

            <h1 className=' text-2xl font-bold text-center mb-3'>{data?.user?.isSellerModeActive === false ? 'Active Profile' : 'Update Profile'}</h1>

            <form action={handleSubmit}>
                <label className=' mt-5 block font-medium text-xl'>Description</label>
                <input defaultValue={data?.user?.description as string} name='description' className='w-full bordercolor  p-2 rounded-lg' required type="text" />
                <label className=' mt-5 block font-medium text-xl'>Showcase</label>

                <PhotoUploadCom data={data?.user} isLoading={isLoading} />

                <label className=' mt-5 block font-medium text-xl'>Prices</label>

                <div className='mt-4 w-full between'>Fixed minimum rate per page <div className=' gap-2 center '>
                    <input type="number" defaultValue={data?.user?.pagePrice as number} required className=' w-[32px] rounded-2xl px-1 bordercolor  center gap-2' name='page' placeholder='12' /> </div>
                </div>

                <div className='mt-4 w-full between'>Fixed minimum rate per diagram  <div className=' gap-2 center '>
                    <input type='number' defaultValue={data?.user?.digramsPrice as number} required className='w-[32px] rounded-2xl px-1 bordercolor    center gap-2' name='digram' placeholder='12' /> </div>
                </div>

                <div className=' w-full center'>
                    <button type='submit' className=' buttonbg mx-auto rounded-2xl px-10 mt-5 py-2'>{data?.user?.isSellerModeActive === false ? 'Active Profile' : 'Update Profile'}</button>
                </div>

            </form>


        </div>
    )
}

export default EditPage