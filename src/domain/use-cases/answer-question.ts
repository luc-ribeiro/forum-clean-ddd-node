import { UniqueEntityID } from '@/core/entities/unique-entity-id'
import { Answer } from '../entities/answer'
import { type AnswerRepository } from '../repositories/answers-repository'

interface AnswerQuestionUseCaseRequest {
  instructorId: string
  questionId: string
  content: string
}

export class AnswerQuestionUseCase {
  constructor (
    private readonly answersRepository: AnswerRepository
  ) {}

  async execute ({ instructorId, questionId, content }: AnswerQuestionUseCaseRequest): Promise<Answer> {
    const answer = Answer.create({
      content,
      authorId: new UniqueEntityID(instructorId),
      questionId: new UniqueEntityID(questionId)
    })

    await this.answersRepository.create(answer)

    return answer
  }
}
