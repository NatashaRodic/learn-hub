import { useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import * as coursesAPI from '../../utilities/courses-api';
import * as applicationsAPI from '../../utilities/applications-api';

export default function ApplicationPage() {
    const { courseId } = useParams();
    const [personalStatement, setPersonalStatement] = useState('');
    const [commitPerWeek, setCommitPerWeek] = useState('');
    const [courseInfo, setCourseInfo] = useState(null);

    useEffect(function() {
        async function getCourse() {
            const course = await coursesAPI.getById(courseId);
            setCourseInfo(course);
        }
        getCourse();
    }, [courseId]);

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
            <h1>Application Form Page</h1>
            {courseInfo && (
                <>
                    <h2>You're applying to... <span style={{ color: 'blue', fontSize: '24px', fontWeight: 'bold' }}>{courseInfo.name}</span></h2>
                    <div className="courseDescription"><p>{courseInfo.content}</p></div>
                </>
            )}
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
