import { Test, TestingModule } from '@nestjs/testing';
import { CategoriesController } from './categories.controller';
import { CategoriesService } from './categories.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdatePatchCategoryDto } from './dto/update-patch-category.dto';
import { UpdatePutCategoryDto } from './dto/update-put-category.dto';

describe('CategoriesController', () => {
  let controller: CategoriesController;
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

  const mockCategoriesService = {
    create: jest.fn(),
    findAll: jest.fn(),
    findOne: jest.fn(),
    update: jest.fn(),
    put: jest.fn(),
    remove: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CategoriesController],
      providers: [
        {
          provide: CategoriesService,
          useValue: mockCategoriesService,
        },
      ],
    }).compile();

    controller = module.get<CategoriesController>(CategoriesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('create', () => {
    it('should create a new category', async () => {
      const createdCategory = { id: categoryId, ...createCategoryDto };
      mockCategoriesService.create.mockResolvedValue(createdCategory);
      const result = await controller.create(createCategoryDto);
      expect(result).toEqual(createdCategory);
    });
  });

  describe('findAll', () => {
    it('should return an array of categories', async () => {
      const categories = [
        { id: 1, name: 'Category 1' },
        { id: 2, name: 'Category 2' },
      ];
      mockCategoriesService.findAll.mockResolvedValue(categories);
      const result = await controller.findAll();
      expect(result).toEqual(categories);
    });
  });

  describe('findOne', () => {
    it('should return a category by id', async () => {
      const category = { id: categoryId, name: 'Category 1' };
      mockCategoriesService.findOne.mockResolvedValue(category);
      const result = await controller.findOne(categoryId);
      expect(result).toEqual(category);
    });
  });

  describe('update', () => {
    it('should update a category by id using PATCH', async () => {
      const updatedCategory = { id: categoryId, ...updatePatchCategoryDto };
      mockCategoriesService.update.mockResolvedValue(updatedCategory);
      const result = await controller.update(
        categoryId,
        updatePatchCategoryDto,
      );
      expect(result).toEqual(updatedCategory);
    });
  });

  describe('put', () => {
    it('should update a category by id using PUT', async () => {
      const updatedCategory = { id: categoryId, ...updatePutCategoryDto };
      mockCategoriesService.put.mockResolvedValue(updatedCategory);
      const result = await controller.put(categoryId, updatePutCategoryDto);
      expect(result).toEqual(updatedCategory);
    });
  });

  describe('remove', () => {
    it('should delete a category by id', async () => {
      const deletedCategory = { id: categoryId, name: 'Deleted Category' };
      mockCategoriesService.remove.mockResolvedValue(deletedCategory);
      const result = await controller.remove(categoryId);
      expect(result).toEqual(deletedCategory);
    });
  });
});
