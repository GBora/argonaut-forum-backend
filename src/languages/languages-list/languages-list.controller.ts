import { Controller, Get, Query } from '@nestjs/common';
import { LanguageService } from '../language.service';

@Controller('languages-list')
export class LanguagesListController {

  constructor(private languageService: LanguageService) {}

  @Get()
  async getList(@Query('lang_code') langCode: string) {
    return this.languageService.getLanguagesList(langCode);
  }
}
