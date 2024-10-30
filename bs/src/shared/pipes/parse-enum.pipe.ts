import {ArgumentMetadata, BadRequestException, Injectable, PipeTransform} from '@nestjs/common';

@Injectable()
export class ParseEnumPipe<T = any> implements PipeTransform {
  constructor(private readonly enumType: T) {}

  transform(value: any, metadata: ArgumentMetadata): T[keyof T] {
    const isEnumValue = Object.values(this.enumType).includes(value);

    if (!isEnumValue) {
      throw new BadRequestException(`Value must be a valid enum member. Allowed values: ${Object.values(this.enumType).join(', ')}`);
    }

    return value as T[keyof T];
  }
}
