import PropTypes from 'prop-types';
import { FaRegBookmark } from "react-icons/fa";
const Blog = ({ blog, handleAddToBookmark , handleMarkAsRead}) => {
    const { title, cover, author, author_img, reading_time, posted_date, hashtags , id } = blog;
    return (
        <div className='mb-20 space-y-4'>
            <img className='w-full mb-8' src={cover} alt={`Cover picture of the title ${title}`} />
            <div className='flex justify-between'>
                <div className='flex justify-start gap-3'>
                    <img className='w-14' src={author_img} alt="" />
                    <div>
                        <h3 className='text-2xl font-bold'>{author}</h3>
                        <p className='text-xs text-[#11111199]'>{posted_date}</p>
                    </div>
                </div>
                <div>
                    <span>{reading_time} min read</span>
                    <button
                        onClick={() => handleAddToBookmark(blog)}
                        className='ml-3 text-2xl text-blue-700'>
                        <FaRegBookmark></FaRegBookmark>
                    </button>
                </div>
            </div>
            <h2 className='text-4xl'>{title}</h2>
            <p>
                {
                    hashtags.map((hash, idx) => <span key={idx}><a href="">  #{hash}</a></span>)
                }
            </p>
            <button onClick={() => handleMarkAsRead(reading_time ,id )} className='text-purple-800 , underline font-bold'>Mark as read</button>
        </div>
    );
};

Blog.propTypes =
{
    blog: PropTypes.object.isRequired,
    handleAddToBookmark:PropTypes.func.isRequired,
    handleMarkAsRead:PropTypes.func.isRequired,
}
export default Blog;