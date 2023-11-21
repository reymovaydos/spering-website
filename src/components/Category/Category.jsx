import CategoryIcon1 from '../../assets/images/c1.png';
import CategoryIcon2 from '../../assets/images/c2.png';
import CategoryIcon3 from '../../assets/images/c3.png'
import CategoryIcon4 from '../../assets/images/c4.png'
import CategoryIcon5 from '../../assets/images/c5.png'
import CategoryIcon6 from '../../assets/images/c6.png'
import './Category.scss';
export const Category = () => {
    return (
        <div className="Category">
            <div className="category-center">
                <h1>CATEGORY</h1>
            </div>
            <div className="grid">
                <div className="box-item">
                    <div className="img-box">
                        <img src={CategoryIcon1} alt="" />
                    </div>
                    <div className="detail-box">
                        <h2>Design & Arts</h2>
                    </div>
                </div>
                <div className="box-item">
                    <div className="img-box">
                        <img src={CategoryIcon2} alt="" />
                    </div>
                    <div className="detail-box">
                        <h2>Web Development</h2>
                    </div>
                </div>
                <div className="box-item">
                    <div className="img-box">
                        <img src={CategoryIcon3} alt="" />
                    </div>
                    <div className="detail-box">
                        <h2>SEO Marketing</h2>
                    </div>
                </div>
                <div className="box-item">
                    <div className="img-box">
                        <img src={CategoryIcon4} alt="" />
                    </div>
                    <div className="detail-box">
                        <h2>Video Editing</h2>
                    </div>
                </div>
                <div className="box-item">
                    <div className="img-box">
                        <img src={CategoryIcon5} alt="" />
                    </div>
                    <div className="detail-box">
                        <h2>Logo Design</h2>
                    </div>
                </div>
                <div className="box-item">
                    <div className="img-box">
                        <img src={CategoryIcon6} alt="" />
                    </div>
                    <div className="detail-box">
                        <h2>Game Design</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}