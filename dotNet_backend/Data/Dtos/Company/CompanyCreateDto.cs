using React18_TypeScript_Project.Data.Enums;

namespace React18_TypeScript_Project.Data.Dtos.Company
{
	public class CompanyCreateDto
	{
		public string? Name { get; set; }

		public CompanySize CompanySize { get; set; }
	}
}
