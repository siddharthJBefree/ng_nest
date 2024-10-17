import {ArgumentMetadata, BadRequestException, Injectable, PipeTransform} from '@nestjs/common';

@Injectable()
export class ParseEmailPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    // Simple email regex for validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(value)) {
      throw new BadRequestException('Invalid email format');
    }

    // Return the valid email
    return value.trim().toLowerCase();
  }
}
