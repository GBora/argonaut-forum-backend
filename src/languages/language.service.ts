import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TranslateService } from 'src/translate/translate/translate.service';
import { Repository } from 'typeorm';
import { languages } from './language.entity';

@Injectable()
export class LanguageService {
  constructor(
    @InjectRepository(languages)
    private languagesRepository: Repository<languages>,
    private translateService: TranslateService
  ) {}
  async getLanguagesList(langCode: string|null): Promise<any> {
    let result = {};
    const list = await this.languagesRepository.find();
    for (var i = 0; i < list.length; i++) {
      const lang = list[i];
      if (!langCode) {
        result[lang.code] = {
          code: lang.code,
          name: lang.name
        }
      } else {
          const translatedName = await this.translateService.translate(lang.name, langCode, "en");
          result[lang.code] = {
            code: lang.code,
            name: translatedName
          }
      }
    }
    return result;
  }
}
