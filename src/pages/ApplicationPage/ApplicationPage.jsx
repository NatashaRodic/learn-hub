import { useParams } from 'react-router-dom';

export default function ApplicationPage() {
    const { courseId } = useParams();
    // add useEffect for course details

    return (
        <>
            <h1>Course Detail Page</h1>
            <form action="">
                <label>What's your motivation to apply this course?</label>
                <textarea name="message" rows="5" cols="30">Type in your statement...</textarea>
                <label>How many hours do you plan to commit per week?</label>
                <input type="number" />
                <button>Submit</button>
            </form>
        </>
    )
}