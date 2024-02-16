using AutoMapper;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using React18_TypeScript_Project.Data;
using React18_TypeScript_Project.Data.Dtos.Job;
using React18_TypeScript_Project.Models;

namespace React18_TypeScript_Project.Controllers
{
	[Route("api/[controller]")]
	[ApiController]
	public class JobController : ControllerBase
	{
		private readonly ApplicationDbContext _context;
		private readonly IMapper _mapper;

		public JobController(ApplicationDbContext context, IMapper mapper)
		{
			_context = context;
			_mapper = mapper;
		}

		// CRUD Operations

		//Create
		[HttpPost]
		[Route("Create")]
		public async Task<IActionResult> CreateJob([FromBody] JobCreateDto dto)
		{
			var newJob = _mapper.Map<Job>(dto);
			await _context.Jobs.AddAsync(newJob);
			await _context.SaveChangesAsync();

			return Ok("Job created successfully!");
		}

		// Read
		[HttpGet]
		[Route("Get")]
		public async Task<ActionResult<IEnumerable<JobGetDto>>> GetJobs()
		{
			var jobs = await _context.Jobs.Include(j => j.Company).OrderByDescending(q => q.CreatedDate).ToListAsync();
			var convertedJobs = _mapper.Map<IEnumerable<JobGetDto>>(jobs);

			return Ok(convertedJobs);
		}

		// Read (Get Company By ID)

		// Update

		// Delete
	}
}
