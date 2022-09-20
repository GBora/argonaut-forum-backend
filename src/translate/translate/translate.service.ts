import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class TranslateService {
  async translate(message: string, to: string, from: string): Promise<string> {
    const reply = await axios.post<any>(
      'http://localhost:5000/translate',
      {
        q: message,
    		source: from,
    		target: to,
    		format: "text",
    		api_key: "",
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      },
    );
    return reply.data["translatedText"];
  }
}
