export interface ICompany {
    id: string;
    name: string;
    companySize: string;
    createdDate: string;
}

export interface ICreateCompanyDto {
    name: string;
    companySize: string;
}

export interface IJob {
    id: string;
    title: string;
    jobLevel: string;
    companyId: string;
    companyName: string;
    createdDate: string;
}

export interface ICreateJobDto {
    title: string;
    jobLevel: string;
    companyId: string;
}

export interface ICandidate {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    coverLetter: string;
    resumeUrl: string;
    jobId: string;
    jobTitle: string;
}

export interface ICreateCandidateDto {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    coverLetter: string;
    jobId: string;
}

// Company
// {
//     "id": 1,
//     "name": "Microsoft",
//     "companySize": "Large",
//     "createdDate": "2024-02-14T15:33:08.851218Z"
//   },

// Jobs
// {
//     "id": 1,
//     "title": "Frontend Developer / React / Asp.Net",
//     "jobLevel": "Associate",
//     "companyId": 1,
//     "companyName": "Microsoft",
//     "createdDate": "2024-02-14T16:05:13.658103Z"
//   },

// Candidates
// {
//     "id": 0,
//     "firstName": "string",
//     "lastName": "string",
//     "email": "string",
//     "phone": "string",
//     "coverLetter": "string",
//     "resumeUrl": "string",
//     "jobId": 0,
//     "jobTitle": "string"
//   }
