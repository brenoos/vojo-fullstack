import { SchemaFactory, Schema, Prop, raw } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type JobsDocument = Jobs & Document;

@Schema({ timestamps: true })
export class Jobs {
  @Prop()
  active: boolean;

  @Prop()
  open: boolean;

  @Prop([String])
  description: string[];

  @Prop([String])
  requirements: string[];

  @Prop()
  totalSpots: number;

  @Prop()
  title: string;

  @Prop()
  information: string;

  @Prop()
  education: string;

  @Prop()
  company: string;

  @Prop(
    raw({
      isVariable: { type: Boolean },
      currency: { type: String },
      amount: { type: Number },
      recurrency: { type: String },
    }),
  )
  compensation: Record<string, any>;

  @Prop(
    raw({
      city: { type: String },
      state: { type: String },
      country: { type: String },
    }),
  )
  location: Record<string, any>;
}

export const JobsSchema = SchemaFactory.createForClass(Jobs);
