import { Test, TestingModule } from '@nestjs/testing';
import { LanguagesListController } from './languages-list.controller';

describe('LanguagesListController', () => {
  let controller: LanguagesListController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LanguagesListController],
    }).compile();

    controller = module.get<LanguagesListController>(LanguagesListController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
