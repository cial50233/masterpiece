package fr.masterpiece.back.services;

import java.util.ArrayList;
import java.util.List;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import fr.masterpiece.back.dtos.AnimalDto;
import fr.masterpiece.back.dtos.AnnouncementDto;
import fr.masterpiece.back.entities.Account;
import fr.masterpiece.back.entities.Animal;
import fr.masterpiece.back.entities.Announcement;
import fr.masterpiece.back.repositories.AccountRepository;
import fr.masterpiece.back.repositories.AnimalRepository;
import fr.masterpiece.back.repositories.AnnouncementRepository;

@Service
public class AnnouncementServiceImpl implements AnnouncementService {

	@Autowired
	private AccountRepository accountRepository;

	@Autowired
	private AnnouncementRepository announcementRepository;

	@Autowired
	private AnimalRepository animalRepository;

	@Autowired
	private ModelMapper mapper;

	@Override
	public void createAnnouncement(AnnouncementDto dto) {

		// Announcement announcement = mapper.map(dto, Announcement.class); for that,
		// DON'T use model mapper cause it doesn't work

		Announcement announcement = new Announcement();

		announcement.setTitle(dto.getTitle());
		announcement.setAddress(dto.getAddress());
		announcement.setJobPlace(dto.getJobPlace());
		announcement.setStartDate(dto.getStartDate());
		announcement.setEndDate(dto.getEndDate());

		Account account = accountRepository.findById(dto.getOwnerId()).get();
		announcement.setOwner(account);

		announcementRepository.save(announcement);

		for (AnimalDto animalDto : dto.getAnimals()) {

			Animal animal = mapper.map(animalDto, Animal.class);
			animal.setAnnouncement(announcement);
			animalRepository.save(animal);

		}

	}

	@Override
	public AnnouncementDto get(Long id) {
		Announcement announcement = announcementRepository.findById(id).get();
		AnnouncementDto dto = mapper.map(announcement, AnnouncementDto.class);
		List<Animal> animals = new ArrayList<>();
		animals = animalRepository.findByAnnouncement(announcement);

		List<AnimalDto> animalsDto = new ArrayList<>();

		for (Animal i : animals) {

			AnimalDto aniDto = mapper.map(i, AnimalDto.class);
			animalsDto.add(aniDto);

		}

		dto.setAnimals(animalsDto);
		return dto;
	}

	@Override
	public void delete(Long id) {
		Announcement announcement = announcementRepository.findById(id).get();
		List<Animal> animals = new ArrayList<>();
		animals = animalRepository.findByAnnouncement(announcement);

		for (Animal i : animals) {

			animalRepository.delete(i);

		}
		announcementRepository.deleteById(id);
	}

	/*
	 * @Override public List<AnnouncementDto> getAll() { List<Announcement>
	 * announcements = announcementRepository.findAll(); List<AnnouncementDto>
	 * result = new ArrayList<>(); for (Announcement announcement : announcements) {
	 * AnnouncementDto dto = mapper.map(announcement, AnnouncementDto.class);
	 * result.add(dto); } return result; }
	 */
	public List<AnimalDto> getAnimalByAnnouncement(Long id) {

		List<Animal> animals = animalRepository.findByAnnouncement(announcementRepository.findById(id).get());
		List<AnimalDto> result = new ArrayList<>();
		for (Animal a : animals) {
			AnimalDto dto = mapper.map(a, AnimalDto.class);
			result.add(dto);
		}
		return result;
	}

	@Override
	public List<AnnouncementDto> getAll() {
		List<Announcement> announcements = announcementRepository.findAllByOrderByIdDesc();
		List<AnnouncementDto> result = new ArrayList<>();

		List<Animal> animals = new ArrayList<>();

		for (Announcement announcement : announcements) {
			AnnouncementDto dto = mapper.map(announcement, AnnouncementDto.class);
			animals = animalRepository.findByAnnouncement(announcement);

			List<AnimalDto> animalsDto = new ArrayList<>();

			for (Animal i : animals) {

				AnimalDto aniDto = mapper.map(i, AnimalDto.class);
				animalsDto.add(aniDto);

			}

			dto.setAnimals(animalsDto);
			result.add(dto);
		}
		return result;
	}

	public List<AnnouncementDto> getByOwner(Long id) {
		Account acc = accountRepository.getOne(id);
		List<Announcement> announcements = announcementRepository.findByOwnerId(acc);
		List<AnnouncementDto> result = new ArrayList<>();
		List<Animal> animals = new ArrayList<>();
		for (Announcement announcement : announcements) {
			AnnouncementDto dto = mapper.map(announcement, AnnouncementDto.class);
			animals = animalRepository.findByAnnouncement(announcement);

			List<AnimalDto> animalsDto = new ArrayList<>();

			for (Animal i : animals) {

				AnimalDto aniDto = mapper.map(i, AnimalDto.class);
				animalsDto.add(aniDto);

			}

			dto.setAnimals(animalsDto);
			result.add(dto);
		}
		return result;
	}

}
