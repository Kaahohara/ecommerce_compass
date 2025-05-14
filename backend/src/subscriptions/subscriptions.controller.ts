import { Body, Controller, Post } from '@nestjs/common';
import { SubscriptionsService } from './subscriptions.service';
import { CreateSubscriptionDto } from './dto/create-subscription.dto';
import { Subscription } from './subscriptions.model';

@Controller('subscriptions')
export class SubscriptionsController {
  constructor(private readonly subscriptionsService: SubscriptionsService) {}

  @Post()
  async create(@Body() dto: CreateSubscriptionDto): Promise<Subscription> {
    return this.subscriptionsService.createSubscription(dto);
  }
}