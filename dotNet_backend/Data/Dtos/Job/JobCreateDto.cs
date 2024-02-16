using React18_TypeScript_Project.Data.Enums;

namespace React18_TypeScript_Project.Data.Dtos.Job
{
    public class JobCreateDto
    {
		public string? Title { get; set; }

		public JobLevel JobLevel { get; set; }

		// F-Key
		public int CompanyId { get; set; }
	}
}
