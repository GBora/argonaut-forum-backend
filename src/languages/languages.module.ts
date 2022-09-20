import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TranslateModule } from 'src/translate/translate.module';
import { languages } from './language.entity';
import { LanguageService } from './language.service';
import { LanguagesListController } from './languages-list/languages-list.controller';

@Module({
  imports: [TypeOrmModule.forFeature([languages]), TranslateModule],
  providers: [LanguageService],
  controllers: [LanguagesListController],
})
export class LanguagesModule {}
