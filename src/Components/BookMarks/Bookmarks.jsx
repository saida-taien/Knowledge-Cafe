import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';
const Bookmarks = ({ bookmarks, readingTime }) => {
    return (
        <div className='w-1/3'>
            <div className=' bg-[#6047EC1A] border border-[#6047EC] rounded-lg mb-4'>
                <h3 className='text-[#6047EC] text-2xl font-bold px-12 py-5'>Reading Time  : {readingTime} min</h3>
            </div>
            <div className=" bg-gray-300 rounded-xl p-4">

                <h2 className='text-3xl text-center bg-gray-300'>BookMarks : {bookmarks.length}</h2>
                {
                    bookmarks.map((bookmark , idx) => <Bookmark key={idx} bookmark={bookmark}></Bookmark>)
                }
            </div>
        </div>
    );
};

Bookmarks.propTypes =
{
    bookmarks: PropTypes.array.isRequired,
    readingTime: PropTypes.number.isRequired,
}
export default Bookmarks;

