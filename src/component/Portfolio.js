import './../css/portfolio.css'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'




function PortfolioWrap() {
    const navigate = useNavigate();
    const navigatePage = (number) => navigate(`/@project/${number}`)
    let projectpage = useSelector((state) => state.mainProjectComponets)
    return (
        <div className='portfolioWrap'>
            <div className='portfolioHead'>
                <h6>Project _</h6>
                <p>포트폴리오용 프로젝트입니다. 간단한 설명이 기재되어 있으며, 클릭시 자세한 설명 및 페이지 확인이 가능합니다.</p>
            </div>
            <div className='portfolioBody'>
                {projectpage.map((val, idx) => {
                    return <div className='projectWarp' key={idx}>{val(navigatePage)}</div>
                })}
            </div>
        </div>
    )
}



export default PortfolioWrap;
