using React18_TypeScript_Project.Data.Enums;

namespace React18_TypeScript_Project.Data.Dtos.Company
{
	public class CompanyGetDto
	{
		public int Id { get; set; }

		public string? Name { get; set; }

		public CompanySize CompanySize { get; set; }

		public DateTime CreatedDate { get; set; } = DateTime.UtcNow;
	}
}
