import ItemProject from "../Container/itemProject/ItemProject";
import ItemBio from "../Container/itemBio/ItemBio"


function Apropos() {
    return (
        <div>
            <div className='backView'>
                <div ></div>
                <ItemBio />
            </div>
            <div id="projects" className='blockItem' >
                <ItemProject />
            </div>
        </div>
    );
}
export default Apropos