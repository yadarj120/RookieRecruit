Model:
(i) Candidates: 
    Id, Name, Password, Jobs applied, 
(ii) Jobs:
    Id, Description, Experience, 


View/Pages:



Controller:



Timeline:
(i) 12th Mar -> Decision on functionalities to be developed.
(ii) 13th Mar -> Design pages
Optional -> write tests for the functionalities
(iii) 14th -> Start frontend and backend
(iv) 15th -> complete the above task
(v) 16th -> Deployment


API's:

Endpoint: /jobs/search (would make it post as the payload could be large)
Functionality: Allows users to search for jobs based on various criteria such as keywords, location, job type, industry, salary range, etc.
Parameters:
keywords: Keywords to search for in job titles or descriptions.
location: Location where the job is located.
type: Type of job (full-time, part-time, contract, etc.).
industry: Industry or category of the job.
Response: Returns a list of jobs that match the search criteria.
Job Details API:

Endpoint: /jobs/{job_id}
Functionality: Retrieves detailed information about a specific job based on its unique identifier.
Parameters:
job_id: Unique identifier of the job.
Response: Returns detailed information about the job, including its title, description, location, company details, requirements, and application instructions.
Job Application API:

Endpoint: /jobs/{job_id}/apply
Functionality: Allows users to apply for a specific job.
Parameters:
job_id: Unique identifier of the job.
applicant_id: Unique identifier of the applicant (optional if user is logged in).
resume: Applicant's resume (file upload or URL).
cover_letter: Applicant's cover letter (optional).
Response: Returns a confirmation message indicating whether the application was successfully submitted.
User Authentication API:

Endpoint: /auth/login, /auth/register
Functionality: Handles user authentication and registration.
Parameters:
For login: email, password.
For registration: name, email, password.
Response: Returns an authentication token upon successful login, or a confirmation message upon successful registration.
User Profile API:

Endpoint: /users/{user_id}/profile
Functionality: Retrieves or updates user profile information.
Parameters:
user_id: Unique identifier of the user.
Response: Returns user profile information such as name, email, contact details, resume, saved jobs, etc.
Saved Jobs API:

Endpoint: /users/{user_id}/saved-jobs
Functionality: Allows users to save jobs for later viewing or application.
Parameters:
user_id: Unique identifier of the user.
Response: Returns a list of jobs saved by the user.
Job Posting API (for employers/companies):

Endpoint: /jobs/post
Functionality: Allows employers or companies to post new job openings.
Parameters:
Job details such as title, description, location, requirements, etc.
Response: Returns a confirmation message indicating whether the job posting was successful.
Analytics API:

Endpoint: /analytics
Functionality: Provides analytics and insights into job searches, user behavior, application rates, popular job categories, etc.
Parameters:
Timeframe, filters, etc.
Response: Returns analytical data and statistics in the form of charts, graphs, or raw data.
Recommendation API:

Endpoint: /recommendations
Functionality: Provides personalized job recommendations to users based on their search history, profile, preferences, skills, etc.
Parameters:
User ID, search history, preferences, etc.
Response: Returns a list of recommended jobs tailored to the user's profile and preferences.
Notification API:

Endpoint: /notifications
Functionality: Sends notifications to users for various events such as new job matches, application status updates, saved job reminders, etc.
Parameters:
User ID, notification type, message, etc.
Response: Returns a confirmation message indicating whether the notification was successfully sent.