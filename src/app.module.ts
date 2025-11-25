import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EncryptionModule } from './encryption/encryption.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    EncryptionModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
