using AutoMapper;
using React18_TypeScript_Project.Data.Dtos.Candidate;
using React18_TypeScript_Project.Data.Dtos.Company;
using React18_TypeScript_Project.Data.Dtos.Job;
using React18_TypeScript_Project.Models;

namespace React18_TypeScript_Project.Data.AutoMapperConfig
{
	public class AutoMapperConfigProfile : Profile
	{
        public AutoMapperConfigProfile()
        {
            // Company
            CreateMap<CompanyCreateDto, Company>();
            CreateMap<Company, CompanyGetDto>();

            // Job
            CreateMap<JobCreateDto, Job>();
            CreateMap<Job, JobGetDto>()
                .ForMember(c => c.CompanyName, opt => opt.MapFrom(src => src.Company.Name));

            // Candidate
            CreateMap<CandidateCreateDto, Candidate>();
            CreateMap<Candidate, CandidateGetDto>()
                .ForMember(c => c.JobTitle, opt => opt.MapFrom(src => src.Job.Title));
        }
    }
}
