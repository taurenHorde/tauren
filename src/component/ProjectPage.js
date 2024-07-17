
import './../css/projectpage.css'
import { useParams} from 'react-router-dom'
import { useSelector } from 'react-redux'


function ProjectpageWrap() {

    let { id } = useParams()
    let projectpage = useSelector((state) => state.pageProjectComponets)
    const LoadJSX = projectpage[id]
    const UndifindedJSX = projectpage[0]
    if (!LoadJSX) return <><UndifindedJSX /></>
    return <><LoadJSX /></>

}


export default ProjectpageWrap;

