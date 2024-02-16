using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using React18_TypeScript_Project.Models;

namespace React18_TypeScript_Project.Data
{
	public class ApplicationDbContext : DbContext
	{
		public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
			: base(options)
		{
		}

		public DbSet<Company> Companies { get; set; } = default!;
		public DbSet<Job> Jobs { get; set; } = default!;
		public DbSet<Candidate> Candidates { get; set; } = default!;

		protected override void OnModelCreating(ModelBuilder modelBuilder)
		{
			base.OnModelCreating(modelBuilder);

			modelBuilder.Entity<Job>()
				.HasOne(job => job.Company)
				.WithMany(company => company.Jobs)
				.HasForeignKey(job => job.CompanyId);

			modelBuilder.Entity<Candidate>()
				.HasOne(candidate => candidate.Job)
				.WithMany(job => job.Candidates)
				.HasForeignKey(candidate => candidate.JobId);

			modelBuilder.Entity<Company>()
				.Property(company => company.CompanySize)
				.HasConversion<string>();

			modelBuilder.Entity<Job>()
				.Property(job => job.JobLevel)
				.HasConversion<string>();
		}
	}
}
