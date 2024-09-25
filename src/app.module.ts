import { Module } from '@nestjs/common';
import { BookModule } from './book/book.module';
import { AuthorModule } from './author/author.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [BookModule, AuthorModule, UserModule],
})
export class AppModule {}
