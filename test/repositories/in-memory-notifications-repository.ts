import { type Notification } from '@/domain/notification/enterprise/entities/notification'
import { type NotificationsRepository } from '@/domain/notification/application/repositories/notifications-repository'

export class InMemoryNotificationsRepository
implements NotificationsRepository {
  public items: Notification[] = []

  async findById (id: string) {
    const notification = this.items.find((item) => item.id.toString() === id)

    if (notification == null) {
      return null
    }

    return notification
  }

  async create (notification: Notification) {
    this.items.push(notification)
  }

  async save (notification: Notification) {
    const itemIndex = this.items.findIndex(
      (item) => item.id === notification.id
    )

    this.items[itemIndex] = notification
  }
}
