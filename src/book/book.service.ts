import { Injectable } from '@nestjs/common';
import { Book } from './entities/book.entity';

@Injectable()
export class BookService {
  private books: Book[] = [];
  private idCounter = 1;

  findAll(): Book[] {
    return this.books;
  }
}
