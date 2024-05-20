import { useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
// import * as coursesAPI from '../../utilities/courses-api';
import * as applicationsAPI from '../../utilities/applications-api';

export default function ApplicationPage() {
    const { courseId } = useParams();
    const [personalStatement, setPersonalStatement] = useState('');
    const [commitPerWeek, setCommitPerWeek] = useState(0);
    // const [courseInfo, setCourseInfo] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const applicationData = {
                personalStatement,
                commitPerWeek,
                courseId
            }
            const response = await applicationsAPI.submitApplication(applicationData);
            console.log('Application submitted successfully:', response);
        } catch(err) {
            console.error('Error submitting application:', err);
        };
    }

    return (
        <>
            <h1>Course Detail Page</h1>
            <form onSubmit={handleSubmit}>
                <label>What's your motivation to apply this course?</label>
                <textarea
                    name="message"
                    rows="5"
                    cols="30"
                    value={personalStatement}
                    onChange={(e) => setPersonalStatement(e.target.value)}
                />
                <label>How many hours do you plan to commit per week?</label>
                <input
                    type="number"
                    value={commitPerWeek}
                    onChange={(e) => setCommitPerWeek(e.target.value)}
                />
                <button type="submit">Submit</button>
            </form>
        </>
    )
}