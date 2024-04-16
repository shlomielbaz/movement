import {
  IsString,
  IsUrl,
  IsNotEmpty,
  IsOptional,
  IsEmail,
} from 'class-validator';

export class UpdateUserDto {
  @IsNotEmpty({ message: 'Field first name must be added' })
  @IsString()
  firstName: string;

  @IsNotEmpty({ message: 'Field last name must be added' })
  @IsString()
  lastName: string;

  @IsNotEmpty({ message: 'Field email must be added' })
  @IsString()
  @IsEmail()
  email: string;

  @IsString()
  @IsOptional()
  @IsUrl()
  avatar?: string;
}
