using React18_TypeScript_Project.Data.Enums;

namespace React18_TypeScript_Project.Models
{
	public class Job : AppUser
	{
        public string? Title { get; set; }

        public JobLevel JobLevel { get; set; }

        // F-Key
        public int CompanyId { get; set; }
        public virtual Company? Company { get; set; }

        public ICollection<Candidate> Candidates { get; set; } = new HashSet<Candidate>();
    }
}
