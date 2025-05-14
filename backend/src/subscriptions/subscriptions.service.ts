import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Subscription } from './subscriptions.model';
import { CreateSubscriptionDto } from './dto/create-subscription.dto';
import { CreationAttributes } from 'sequelize';

@Injectable()
export class SubscriptionsService {
  constructor(
    @InjectModel(Subscription)
    private subscriptionModel: typeof Subscription,
  ) {}

  async createSubscription(data: CreateSubscriptionDto): Promise<Subscription> {
    return this.subscriptionModel.create(data as CreationAttributes<Subscription>);
  }
}
