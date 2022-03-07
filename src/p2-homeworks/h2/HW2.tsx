import React, {useState} from 'react'
import Affairs from './Affairs'


// types
export type AffairPriorityType = string // need to fix any
export type AffairType = {
    _id: number,
    name: string,
    priority: string
} // need to fix any
export type FilterType = 'all' | AffairPriorityType

// constants
const defaultAffairs: AffairType[] = [ // need to fix any
    {_id: 1, name: 'React', priority: 'high'},
    {_id: 2, name: 'anime', priority: 'low'},
    {_id: 3, name: 'games', priority: 'low'},
    {_id: 4, name: 'work', priority: 'high'},
    {_id: 5, name: 'html & css', priority: 'middle'},
]

// pure helper functions
export const filterAffairs = (affairs: AffairType[], filter: string): AffairType[] => { // need to fix any
    if (filter === 'high') {
        return affairs.filter((item) => item.priority === 'high')
    } else if (filter === 'middle') {
        return affairs.filter((item) => item.priority === 'middle')
    } else if (filter === 'low') {
        return affairs.filter((item) => item.priority === 'low')
    } else {
        return affairs
    }


}
export const deleteAffair = (affairs: AffairType[], _id: number): AffairType[] => { // need to fix any
    return affairs.filter((a) => a._id !== _id)

}

function HW2() {

    const [affairs, setAffairs] = useState<AffairType[]>(defaultAffairs) // need to fix any
    const [filter, setFilter] = useState<FilterType>('all')


    const filteredAffairs = filterAffairs(affairs, filter)
    const deleteAffairCallback = (_id: number) => setAffairs(deleteAffair(affairs, _id)) // need to fix any

    const Hw2Wrapper = {
        width: '350px',
        height: 'fitContent',
        marginBottom: '20px',
        padding: '20px 20px',
        borderRadius: '5px',
        boxShadow: '3px 3px 10px grey'



    }

    return (
        <div style={Hw2Wrapper}>

            Homeworks 2

            {/*should work (должно работать)*/}
            <Affairs
                data={filteredAffairs}
                setFilter={setFilter}
                deleteAffairCallback={deleteAffairCallback}
            />


            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeAffairs/>*/}

        </div>
    )
}

export default HW2
