using AutoMapper;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using React18_TypeScript_Project.Data;
using React18_TypeScript_Project.Data.Dtos.Candidate;
using React18_TypeScript_Project.Models;

namespace React18_TypeScript_Project.Controllers
{
	[Route("api/[controller]")]
	[ApiController]
	public class CandidateController : ControllerBase
	{
		private readonly ApplicationDbContext _context;
		private readonly IMapper _mapper;

		public CandidateController(ApplicationDbContext context, IMapper mapper)
		{
			_context = context;
			_mapper = mapper;
		}

		// CRUD Operations

		//Create
		[HttpPost]
		[Route("Create")]
		public async Task<IActionResult> CreateCandidate([FromForm] CandidateCreateDto dto, IFormFile pdfFile)
		{
			// save pdf to server
			// save url into our e
			var fiveMegaByte = 5 * 1024 * 1024;
			var pdfMimeType = "application/pdf";

			if (pdfFile.Length > fiveMegaByte || pdfFile.ContentType != pdfMimeType)
			{
				return BadRequest("File is not valid");
			}

			var resumeUrl = Guid.NewGuid().ToString() + ".pdf";
			var filePath = Path.Combine(Directory.GetCurrentDirectory(), "Documents", "pdfs", resumeUrl);

			using (var stream = new FileStream(filePath, FileMode.Create))
			{
				await pdfFile.CopyToAsync(stream);
			}

			var newCandidate = _mapper.Map<Candidate>(dto);
			newCandidate.ResumeUrl = resumeUrl;

			await _context.Candidates.AddAsync(newCandidate);
			await _context.SaveChangesAsync();

			return Ok("Candidate saved successfully!");
		}

		// Read
		[HttpGet]
		[Route("Get")]
		public async Task<ActionResult<IEnumerable<CandidateGetDto>>> GetCandidates()
		{
			var candidates = await _context.Candidates.Include(c => c.Job).OrderByDescending(q => q.CreatedDate).ToListAsync();
			var convertedCandidates = _mapper.Map<IEnumerable<CandidateGetDto>>(candidates);

			return Ok(convertedCandidates);
		}

		// Read (Download PDF File)
		[HttpGet]
		[Route("download/{url}")]
		public IActionResult DownloadPdfFile(string url)
		{
			var filePath = Path.Combine(Directory.GetCurrentDirectory(), "Documents", "pdfs", url);

			if(!System.IO.File.Exists(filePath))
			{
				return NotFound("File not found!");
			}

			var pdfBytes = System.IO.File.ReadAllBytes(filePath);
			var file = File(pdfBytes, "application/pdf", url);

			return file;
		}

		// Read (Get Company By ID)

		// Update

		// Delete
	}
}
