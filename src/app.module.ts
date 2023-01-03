import { Module } from '@nestjs/common';
import { DataBaseModule } from './infra/database/database.module';
import { HttpsModule } from './infra/http/http.module';

@Module({
  imports: [HttpsModule, DataBaseModule],
})
export class AppModule {}
