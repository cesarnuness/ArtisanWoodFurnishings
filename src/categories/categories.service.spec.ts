import { Test, TestingModule } from '@nestjs/testing';
import { CategoriesService } from './categories.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdatePatchCategoryDto } from './dto/update-patch-category.dto';
import { UpdatePutCategoryDto } from './dto/update-put-category.dto';
import { PrismaService } from 'src/prisma/prisma.service';

describe('CategoriesService', () => {
  let service: CategoriesService;
  const createCategoryDto: CreateCategoryDto = {
    name: 'Category 1', // Sample name
  };
  const updatePatchCategoryDto: UpdatePatchCategoryDto = {
    name: 'Updated Category 1', // Sample name
  };
  const updatePutCategoryDto: UpdatePutCategoryDto = {
    name: 'Updated Category 2', // Sample name
  };
  const categoryId = 1;

  const mockPrismaService = {
    create: jest.fn(),
    findMany: jest.fn(),
    findUnique: jest.fn(),
    update: jest.fn(),
    delete: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CategoriesService,
        {
          provide: PrismaService,
          useValue: mockPrismaService,
        },
      ],
    }).compile();

    service = module.get<CategoriesService>(CategoriesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('create', () => {
    it('should create a new category', async () => {
      const createdCategory = { id: categoryId, ...createCategoryDto };
      mockPrismaService.create.mockResolvedValue(createdCategory);
      const result = await service.create(createCategoryDto);
      expect(result).toEqual(createdCategory);
    });
  });

  describe('findAll', () => {
    it('should return an array of categories', async () => {
      const categories = [
        { id: 1, name: 'Category 1' },
        { id: 2, name: 'Category 2' },
      ];
      mockPrismaService.findMany.mockResolvedValue(categories);
      const result = await service.findAll();
      expect(result).toEqual(categories);
    });
  });

  describe('findOne', () => {
    it('should return a category by id', async () => {
      const category = { id: categoryId, name: 'Category 1' };
      mockPrismaService.findUnique.mockResolvedValue(category);
      const result = await service.findOne(categoryId);
      expect(result).toEqual(category);
    });
  });

  describe('update', () => {
    it('should update a category by id', async () => {
      const updatedCategory = { id: categoryId, ...updatePatchCategoryDto };
      mockPrismaService.update.mockResolvedValue(updatedCategory);
      const result = await service.update(categoryId, updatePatchCategoryDto);
      expect(result).toEqual(updatedCategory);
    });
  });

  describe('put', () => {
    it('should update a category by id using PUT', async () => {
      const updatedCategory = { id: categoryId, ...updatePutCategoryDto };
      mockPrismaService.update.mockResolvedValue(updatedCategory);
      const result = await service.put(categoryId, updatePutCategoryDto);
      expect(result).toEqual(updatedCategory);
    });
  });

  describe('remove', () => {
    it('should delete a category by id', async () => {
      const deletedCategory = { id: categoryId, name: 'Deleted Category' };
      mockPrismaService.delete.mockResolvedValue(deletedCategory);
      const result = await service.remove(categoryId);
      expect(result).toEqual(deletedCategory);
    });
  });
});
