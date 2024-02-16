using React18_TypeScript_Project.Data.Enums;

namespace React18_TypeScript_Project.Data.Dtos.Job
{
    public class JobGetDto
    {
		public int Id { get; set; }

		public string? Title { get; set; }

		public JobLevel JobLevel { get; set; }

		public int CompanyId { get; set; }

        public string? CompanyName { get; set; }
        public DateTime CreatedDate { get; set; } = DateTime.UtcNow;
	}
}
