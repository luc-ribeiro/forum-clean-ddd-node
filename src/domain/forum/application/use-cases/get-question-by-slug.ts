import { type Question } from '@/domain/forum/enterprise/entities/question'
import { type QuestionsRepository } from '../repositories/questions-repository'
import { type Either, left, right } from '@/core/either'
import { ResourceNotFoundError } from '@/core/errors/errors/resource-not-found-error'

interface GetQuestionBySlugUseCaseRequest {
  slug: string
}

type GetQuestionBySlugUseCaseResponse = Either<
ResourceNotFoundError,
{
  question: Question
}
>

export class GetQuestionBySlugUseCase {
  constructor (private readonly questionsRepository: QuestionsRepository) {}

  async execute ({
    slug
  }: GetQuestionBySlugUseCaseRequest): Promise<GetQuestionBySlugUseCaseResponse> {
    const question = await this.questionsRepository.findBySlug(slug)

    if (question == null) {
      return left(new ResourceNotFoundError())
    }

    return right({
      question
    })
  }
}
