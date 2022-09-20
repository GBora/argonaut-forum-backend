import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { languages } from './languages/language.entity';
import { LanguagesModule } from './languages/languages.module';
import { TranslateModule } from './translate/translate.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mongodb',
      url: 'mongodb://localhost/argonautsForum',
      synchronize: true,
      useUnifiedTopology: true,
      entities: [languages],
    }),
    LanguagesModule,
    TranslateModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
